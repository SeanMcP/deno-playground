const list = [
  "bog",
  "tree",
  "limb",
  "branch",
  "twig",
  "leaf",
  "nest",
  "egg",
  "bird",
  "feather",
  "flea",
];

function singChorus() {
  const line = "Ho! Ro! The rattlin' bog\nBog down in the valley-o!\n";
  console.log(line + line);
}

for (let i = 1; i < list.length; i++) {
  singChorus();
  const prev = list[i - 1];
  const item = list[i];
  console.log(
    `And on that ${prev} there was a ${item}\nA rare ${item}, a rattlin' ${item}!\n`
  );
  for (let j = i; j > 0; j--) {
    const next = list[j - 1];
    console.log(`A ${list[j]} on a ${next}, and`);
  }
  console.log("A bog down in the valley-o!\n");
}
