### Back-end Questions

1. Explain First-party cookie & Third-party cookie
#### Answer
```
First-party cookie is the cookie created by the site that we currently visited.
So Third-party cookie is the cookie created by the other site.
```

2. Explain CAP Theorem.
#### Answer
```
Three characteristics of the DBMS

Consistency: How well the system maintain all nodes see the same data at the same time
Availability: How well the system open for read and write (handle a lot of requests)
Partition tolerance: How well the system continue working properly even if some nodes are not working
```

3. Considering two queries

```javascript
const searchIds = ['1', '2', '3', ...];

const query1 = await Product.find({ id: { $in: searchIds } });

const query2 = await Promise.all(searchIds.map(searchId => Product.find({ id: searchId })));
```

Which one is faster.

#### Answer
```
query1 is faster because it scan the whole collection once but query2 do n(searchIds.length) times
```

4. Explain XSS / SQL Injection / Man in the Middle Attack, and how to prevent each attack type.

5. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.
#### Answer
```
callback: a function that be passed in the target function to run after the target function is done
Promise: an object that encapsulate asynchronous tasks and allow to be chain by `then` keyword
async await: keywords that use to work with Promise for simplicity
  `async` encapsulate a normal function in Promise
  `await` is the another way to do `then` for Promise in the clean way
```

6. Explain how HTTP protocol works.
