let n = 10;
 
nextPrime:
for (let i = 2; i <= n; i++) { 
 
  for (let c = 2; c < i; c++) { 
    if (i % c == 0) continue nextPrime; 
  }
 
  console.log( i ); 
}
