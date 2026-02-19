interface Props {
  count: number
}

export default function ChildComponent({ count }: Props) {
  return <p>{count}</p>
}
