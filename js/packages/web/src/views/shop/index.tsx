import {Card, Carousel} from 'antd';
import {Button} from 'antd';
import {ShoppingCartOutlined} from "@ant-design/icons";
import {Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction} from "@solana/web3.js";
import {useWallet} from "@solana/wallet-adapter-react";
import {sendTransactionWithRetry, useConnection, WalletSigner} from "@oyster/common";

const {Meta} = Card;

export function Shop() {
  return (
    <div>
      <ProductCard/>
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

export function ProductCard() {
  const {publicKey} = useWallet();
  const wallet = useWallet();
  const connection = useConnection();
  return (
    <Card
      style={{width: 300}}
      cover={
        <ImageCarousel/>
      }
      actions={[
        <Button type="default" onClick={event => sendMoney(wallet, connection, publicKey)}
                icon={<ShoppingCartOutlined/>} size="large">
          Buy for 0.5 SOL
        </Button>
      ]}
    >
      <Meta
        title="Big man hoodie"
        description="Hoodie for big boys"
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
