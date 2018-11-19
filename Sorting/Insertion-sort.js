const insertion = data => {
  for (let i = 1; i < data.length; i++) {
    let item = data[i];
    let idx = i;

    while(idx > 0 && data[idx - 1] > item){
        data[idx] = data[--idx];
    }
    data[idx] = item
  }
  return data
};

