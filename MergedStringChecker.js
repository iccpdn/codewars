const isMerge = (s, part1, part2) => {
    return !s ? !(part1 || part2) :
        (s[0] === part1[0]/*?.*/ && isMerge(s.slice(1), part1.slice(1), part2)) ||
        (s[0] === part2[0] && isMerge(s.slice(1), part1, part2.slice(1)));
};

// function isMerge(s, part1, part2) {
//   if (s === "" && part1 === "" && part2 === "") return true;
//   if (s !== "") {
//     if (s[0] === part1[0] && part1[0] === part2[0]) {
//       // we make two branches of an recursion and get OR of the answers
//       return (isMerge(s.slice(1), part1.slice(1), part2) || isMerge(s.slice(1), part1, part2.slice(1)));
//     } else if (s[0] === part1[0]) {
//       return isMerge(s.slice(1), part1.slice(1), part2);
//     } else if (s[0] === part2[0]) {
//       return isMerge(s.slice(1), part1, part2.slice(1));
//     }
//   }
  
//   return false;
// }

isMerge('codewars', 'cdw', 'oears');
// isMerge('codewars', 'code', 'wasr');
// isMerge('codewars', 'cod', 'wars');
// isMerge('Bahamas', 'Bam', 'haas');
