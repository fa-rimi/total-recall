// EASY GOING === Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // GET EVEN === Write a for loop that will log only the even numbers in 0 through 200..
  for (let evenNum = 0; evenNum <= 200; evenNum += 2) {
    console.log(evenNum);
  }
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // FIZZ BUZZ === This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and shorter.
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0) console.log("Fizz");
    if (num % 5 === 0) console.log("Buzz");
    if (num % 3 === 0 && num % 5 === 0) console.log("FizzBuzz");
  }
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // WILD WILD LIFE === Use the following arrays to answer the questions below (name, species, age, hometown).
  const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
  const sharky = ["Sharky", "shark", 20, "Left Coast"];
  const plantee = ["Plantee", "plant", 5000, "Mordor"];
  const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
  const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
  
  // step1 === Plantee just had her birthday; change Plantee's array to reflect her being a year older.
  plantee.splice(2, 1, "5001");
  console.log(plantee);
  // Option 1 == 2 (which argument), 1 (how many you want to remove), "5001" (what you're changing it into)
  // Option 2
  // plantee[2] = "5001";
  // console.log(plantee);
  
  // step2 === Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
  // step4 === Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
  wolfy.splice(3, 1, "Gotham City");
  wolfy.splice(0, 1, "Gameboy");
  console.log(wolfy);
  
  // step3 === Give D'Art a second hometown by adding "Hawkins"
  dart.push = "Hawkins";
  console.log(dart);
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // YELL AT NINJA TURTLES === Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
  // Use a for of loop to call toUpperCase() on each of them and print out the result.
  const ninjaTurts = ["Donatello", "Leonardo", "Raphael", "Michelangelo"];
  
  // Shortcut to for loop == for all elements of the array do this
  // For Loop allows for flexibility but for of targets all of it
  for (let turtle of ninjaTurts) {
    // creating and assigning turtle to every ninja turtle in the array
    console.log(turtle.toUpperCase());
  }
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // METHODS, REVISITED === Here is a list of my favorite movies:
  const favMovies = [
    "Jaws",
    "The Fellowship of the Ring",
    "Howl's Moving Castle",
    "Django Unchained",
    "Cloud Atlas",
    "The Usual Suspects",
    "Toy Story",
    "Conan the Barbarian",
    "Titanic",
    "Harry Potter",
    "Fried Green Tomatoes",
    "Volver",
    "Oculus",
    "Seven",
    "Black Panther",
    "Harry Potter",
    "Imitation of Life",
    "Snatch",
    "Fast and Furious",
  ];
  
  // for( let i = 0; i < favMovies.length; i++){
  //     if(favMovies[i] === 'Titanic'){
  //         console.log(i)
  //     }
  // }
  console.log(favMovies.indexOf("Titanic"));
  // 1. Use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
  favMovies.sort();
  console.log(favMovies);
  
  // 2. Use the method pop
  favMovies.pop();
  console.log(favMovies);
  
  // 3. push "Guardians of the Galaxy"
  favMovies.push("Guardians of the Galaxy");
  console.log(favMovies);
  
  // 4. Reverse the array
  favMovies.reverse();
  console.log(favMovies);
  
  // 5. Use the shift method
  favMovies.shift();
  console.log(favMovies);
  
  // 6. unshift- what does it return?
  favMovies.unshift("Princess Mononoke");
  console.log(favMovies);
  // Adds Princess Mononoke to the front
  
  // 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
  console.log(favMovies.indexOf("Django Unchained"));
  favMovies.splice(15, 1, "Avatar");
  console.log(favMovies);
  
  // 8. slice the last half of the array (challenge yourself and try to programmatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
  let newMov = favMovies.slice(0, Math.floor(favMovies.length / 2));
  
  // 9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
  console.log(newMov);
  
  // 10. After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
  console.log(newMov.indexOf("Fast and Furious"));
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // WHERE IS WALDO
  const whereIsWaldo = [
    ["Timmy", "Frank"],
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]],
  ];
  
  whereIsWaldo.splice(1, 1);
  console.log(whereIsWaldo);
  whereIsWaldo[1][2] = "No One";
  console.log(whereIsWaldo);
  let found = whereIsWaldo[2][1][1];
  console.log(found);
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // EXCITED KITTEN === For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
  let talk = [
    "...human...why you taking pictures of me?...",
    "...the catnip made me do it...",
    "...why does the red dot always get away...",
  ];
  for (let i = 0; i <= 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
    if (i % 2 === 0) {
      let meow = 0;
      console.log(talk[Math.floor(Math.random() * talk.length)]);
    }
  }
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // FIND THE MEDIAN === Find the median number in the following nums array, then console.log that number.
  const nums = [
    14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
    17, 12, 71, 18, 15, 12,
  ];
  
  console.log(nums.sort()[Math.floor(nums.length / 2)]);
  