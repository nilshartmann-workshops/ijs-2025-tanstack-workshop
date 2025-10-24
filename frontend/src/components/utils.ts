export function toggleId(currentList: string[] | undefined, id: string) {
  if (!currentList?.length) {
    return [id];
  }

  const newList = currentList.filter((i) => i !== id);
  if (newList.length == currentList.length) {
    newList.push(id);
  }

  if (newList.length === 0) {
    return undefined;
  }

  return newList;
}

export function waitFor<R>(result: R, amount: number): Promise<R> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), amount);
  });
}
