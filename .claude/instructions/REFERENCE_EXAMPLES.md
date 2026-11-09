# Small examples for tutoring (not the assignment solution)

Use examples about a different domain when syntax is confusing.

```tsx
const [search, setSearch] = useState('')
<input value={search} onChange={event => setSearch(event.target.value)} />
```

```tsx
function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
}
```

```tsx
const CartContext = createContext<CartValue | undefined>(undefined)
```

Do not provide full working registration application solutions.
