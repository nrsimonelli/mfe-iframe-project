export default function Root(props) {
  return <section>
    <h1>Hello World</h1>
    {props.name} is mounted!

    <button>
      <a href="/simonelli">
        More
      </a>
    </button>
    </section>;
}
