// 1.
// Callback code
f('hello', function(error, result) {
  if (error) console.error(error.stack);
  console.log(result);
});

// Promise code
f('hello')
  .then(result => console.log(result))
  .catch(error => console.error(error.stack));


// 2.
// Suppose q1 and q2 are Mongoose queries
// You want to run q1 and print the result, and afterwards run q2 and print the result
// How can we do this without promises?
q1.exec(function(error, r1) {
  if (error) console.log(error.stack);
  console.log(r1);

  q2.exec(function(error, r2) {
    if (error) console.log(error.stack);
    console.log(r2);
  });
});

// How can we do this with promises? (similar to how we changed the saves)
q1.exec()
  .then(function(r1){
    console.log(r1);
    return q2.exec();
  })

  .then(r2 => console.log(r2))
  .catch(error => console.error(error.stack));

// 3.
// Suppose documents is an array of Mongoose documents that have been created but not saved.
// You want to save them all at once (that is, in parallel). Write some code to do this. (simliar to how we did queries)
const saves = documents.map(d => d.save())
Promise.all(saves)
  .then(() => console.log('All saved'))
  .catch(error => console.log(error.stack));
