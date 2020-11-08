### Back-end Questions

1. Explain First-party cookie & Third-party cookie

2. Explain CAP Theorem.

3. Considering two queries

```javascript
const searchIds = ['1', '2', '3', ...];

const query1 = await Product.find({ id: { $in: searchIds } });

const query2 = await Promise.all(searchIds.map(searchId => Product.find({ id: searchId })));
```

Which one is faster.

4. Explain XSS / SQL Injection / Man in the Middle Attack, and how to prevent each attack type.

5. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.

6. Explain how HTTP protocol works.
