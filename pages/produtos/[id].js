// export async function getServerSideProps(context) {
//   const id = context.query.id;
// *usando essa função ele já entrega tudo para o client, já que agora o número do id página vai junto
//   return {
//     props: {
//       id: id,
//     },
//   };
// }

export async function getStaticPaths() {
  // :cada caminho dentro do array, vai gerar um novo "caminho", e apenas eles podem ser acessados
  return {
    paths: [
      {
        params: {
          id: '1'
        },
      },
      {
        params: {
          id: '2'
        },
      },
    ],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props: {
            id: 1
        }
    }
}


function Produtos(props) {
  return <div>Id do produto: {props.id}</div>;
}

export default Produtos;
