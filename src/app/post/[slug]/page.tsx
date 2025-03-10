
interface PostPagePorps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }]
}

export default async function PostPage(props: PostPagePorps) {
  const { slug } = await props.params

  return (
    <>
      <div>
        <h1 className="text-2xl text-amber-200">Post Page! {slug}</h1>
      </div>
    </>
  )
}
