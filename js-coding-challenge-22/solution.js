function example(obj) {
  const library = [
    {
      title: "The Road Ahead",
      author: "Bill Gates",
      readingStatus: true,
    },
    {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      readingStatus: true,
    },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      readingStatus: false,
    },
  ];

  let result = "";

  for (let i = 0; i < library.length; i++) {
    if (library[i]["readingStatus"] === true) {
      result += `You have already read ${library[i].title} by ${library[i].author}\n`;
    } else {
      result += `You have not yet read ${library[i].title} by ${library[i].author}\n.`;
    }
  }
  console.log(result);
}

example();
