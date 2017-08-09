const isMerge = (string, part1, part2) => {
    if (!string) return !(part1 || part2);
    return (string[0] === part1[0] && isMerge(string.slice(1), part1.slice(1), part2)) ||
           (string[0] === part2[0] && isMerge(string.slice(1), part1, part2.slice(1)));
};

// codewars best practice
// function isMerge(s, part1, part2) {
//   return !s ? !(part1 || part2) :
//     s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
//     s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
// }

isMerge('codewars', 'cdw', 'oears');
isMerge('codewars', 'code', 'wasr');
isMerge('codewars', 'cod', 'wars');
isMerge('Bahamas', 'Bam', 'haas');
