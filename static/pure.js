export function randomly(...additionally) {
  function randomlyOnce(arr) {
    const selected = Math.floor(Math.random() * arr.length);
    return arr[selected];
  }
  return additionally.map(randomlyOnce);
}

export function enumerably(...additionally) {
  return additionally.reduce((seq, dimension) =>
    dimension.flatMap((aspect) =>
      seq.map((drill) =>
        Array.isArray(drill) ? [aspect, ...drill] : [aspect, drill]
      )
    )
  );
}
