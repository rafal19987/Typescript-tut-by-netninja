const hello = (name: string | number) => {
  if (typeof name === 'string') {
    console.log(`Hi ${name}`)
  } else {
    console.log(`Hi, ${name}. Your name is rly interesting :)`)
  }
}

hello(23)
