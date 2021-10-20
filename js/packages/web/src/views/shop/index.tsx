import {Card, Carousel, Modal, Select} from 'antd';
import {Button, message} from 'antd';
import {ShoppingCartOutlined} from "@ant-design/icons";
import {Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction} from "@solana/web3.js";
import {useWallet} from "@solana/wallet-adapter-react";
import {sendTransactionWithRetry, useConnection, WalletSigner} from "@oyster/common";
import {useState} from "react";

const {Meta} = Card;
const cart:any = [];
export function Shop() {
  return (
    <div>
      <FormButton/>
      <ProductCard title="Big dick hoodie" description="Not for small balls" cost="0.5 SOL" size=""/>
    </div>
  );
}

export function ImageCarousel() {

  return (
    <Carousel>
      <div>
        <img
          style={{height: "150px", width: "300px", objectFit: "cover"}}
          alt="example"
          src="https://photos.queens.cz/queens/2021-02/large/converse-bandulu-hoodie-108653_1.jpg"
        />
      </div>
      <div>
        <img
          style={{height: "150px", width: "300px", objectFit: "cover"}}
          alt="example"
          src="https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/419501/item/sggoods_31_419501.jpg?width=1600&impolicy=quality_75"
        />
      </div>
      <div>
        <img
          style={{height: "150px", width: "300px", objectFit: "cover"}}
          alt="example"
          src="https://martinvalen.com/15010-large_default/men-s-oversize-basic-hoodie-sweatshirt-with-kangaroo-pocket-in-white.jpg"
        />
      </div>
    </Carousel>
  );
}
export function BuyButton(){
  const {publicKey} = useWallet();
  const wallet = useWallet();
  const connection = useConnection();
  return(
    <Button type="default" onClick={event => sendMoney(wallet, connection, publicKey)}
            icon={<ShoppingCartOutlined/>} size="large">
      Buy for 0.5 SOL
    </Button>
  );
}

const FormButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div>
      <Button type="primary" onClick={showModal}>
        {cart.length}
      </Button>
      <Modal title="Your cart" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {cart.map((item) => <div>
          <div>{item.title}</div>
          <div>{item.size}</div>
          <div>{item.cost}</div>
        </div>)}
      </Modal>
    </div>
  );
};


export function ProductCard(props) {
  const { Option } = Select;
  const [size, setSize] = useState('')
  const addToCart= () => {
    cart.push(props)
    message.info('Added to cart');
  }
  function onChange(value) {
    setSize(value);
  }

  return (
    <Card
      style={{width: 300}}
      cover={
        <ImageCarousel/>
      }

      actions={[
        <div>
        <Button type="primary" onClick={addToCart}>
          Add To Cart
        </Button>
          <Select
            style={{ width: 80 }}
            placeholder="Size"
            optionFilterProp="children"
            onChange={onChange}
          >
            <Option value="m">M</Option>
            <Option value="l">L</Option>
            <Option value="xl">XL</Option>
          </Select>
        </div>
      ]}
    >
      <Meta
        title={props.title}
        description={props.description}
      />
    </Card>
  );
}

export async function sendMoney(
  wallet: WalletSigner,
  connection,
  pubkey,
  lamports: number = 500 * 1000000
) {
  try {
    const destPubkey = new PublicKey('8znk3TRchtSZ17wS1rap4v2gouYov6ir13zZCZ7Q6ViL');


    const receiverAccountInfo = await connection.getAccountInfo(destPubkey);
    console.log("receiver data size", receiverAccountInfo?.data.length);
    let instruction
    if(wallet.publicKey){
      instruction = SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: destPubkey,
        lamports,
      });
    }
    let trans = await setWalletTransaction(instruction, pubkey, connection);

    let signature = await signAndSendTransaction(wallet, trans, connection);
    let result = await connection.confirmTransaction(signature, "singleGossip");
    console.log("money sent", result);
  } catch (e) {
    console.warn("Failed", e);
  }
}

export async function setWalletTransaction(
  instruction: TransactionInstruction,
  connection,
  pubkey
): Promise<Transaction> {
  const transaction = new Transaction();
  transaction.add(instruction);
  transaction.feePayer = pubkey;
  return transaction;
}

export async function signAndSendTransaction(
  wallet: WalletSigner,
  transaction: Transaction,
  connection: Connection
) {
    await sendTransactionWithRetry(connection, wallet, transaction.instructions, [],);
}
