function add(a, b){
  if (typeof a !== 'number'){
    throw new Error('"a" is not a number');
  } else if (typeof b !== 'number'){
    throw new Error('"b" is not a number');
  }
  console.log(a + b);
}

try {
	add('string', 'string');
} catch (err) {
	console.log('catching error:');
	console.log(err.message);
}