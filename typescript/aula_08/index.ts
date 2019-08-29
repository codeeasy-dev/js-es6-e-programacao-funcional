interface IPost {
  title: string,
}

interface IUsuario {
  nome: string,
  idade: number,
  posts: IPost[],
}

function printUsuario(usuario: IUsuario): void {
  console.log(usuario.nome + ' - ' + usuario.idade)
  usuario.posts.map((post: IPost) => {
    console.log(post.title)
  })
}

printUsuario({
  idade: 19,
  nome: 'Felipe',
  posts: [
    {
      title: 'P1'
    },
    {
      title: 'P2'
    }
  ]
})
