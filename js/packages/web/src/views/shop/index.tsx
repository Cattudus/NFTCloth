import {Card, Carousel} from 'antd';
import {Button} from 'antd';
import {ShoppingCartOutlined} from "@ant-design/icons";




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
          style={{height:"150px", width: "300px", objectFit: "cover"}}
          alt="example"
          src="https://photos.queens.cz/queens/2021-02/large/converse-bandulu-hoodie-108653_1.jpg"
        />
      </div>
      <div>
        <img
          style={{height:"150px", width: "300px", objectFit: "cover"}}
          alt="example"
          src="https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/419501/item/sggoods_31_419501.jpg?width=1600&impolicy=quality_75"
        />
      </div>
      <div>
        <img
          style={{height:"150px", width: "300px", objectFit: "cover"}}
          alt="example"
          src="https://martinvalen.com/15010-large_default/men-s-oversize-basic-hoodie-sweatshirt-with-kangaroo-pocket-in-white.jpg"
        />
      </div>
    </Carousel>
  );
}

export function ProductCard() {
  return (
    <Card
      style={{width: 300}}
      cover={
      <ImageCarousel/>
      }
      actions={[
        <Button type="default"  icon={<ShoppingCartOutlined/>} size="large">
          Buy for 1 SOL
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

// export async function BuySomething(){
//   const  connection  = useConnection();
//   const { publicKey, sendTransaction } = useWallet();
//
//   const onClick = useCallback(async () => {
//     if (!publicKey) throw new WalletNotConnectedError();
//
//     const transaction = new Transaction().add(
//       SystemProgram.transfer({
//         fromPubkey: publicKey,
//         toPubkey: Keypair.generate().publicKey,
//         lamports: 1,
//       })
//     );
//
//     const signature = await sendTransaction(transaction, connection);
//
//     await connection.confirmTransaction(signature, 'processed');
//   }, [publicKey, sendTransaction, connection]);
//
// return(0)
// }
