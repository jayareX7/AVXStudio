

function WelcomeSection ({ posts }) {
  return (

    <>
    {posts.map((post) =>  {
      return (
        <div key={post.id}>
          <h2> {post.id} {post.title} {post.content}</h2>
          <hr />
        </div>
      )
    })}
      </>
  )
  }

export default WelcomeSection
  export async function getStaticProps () {
    const response = await fetch ('http://localhost:4000/posts')
    const data = await response.json()

    return {
      props: {
        posts: data
    }
  }
}
