export default function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const result: T[][] = [];
    
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
  
    return result;
  }
  
//   // Example usage:
//   const broadcastArray = [
//     { id: 1, name: "Broadcast 1" },
//     { id: 2, name: "Broadcast 2" },
//     { id: 3, name: "Broadcast 3" },
//     { id: 4, name: "Broadcast 4" },
//     { id: 5, name: "Broadcast 5" },
//     { id: 6, name: "Broadcast 6" },
//     { id: 7, name: "Broadcast 7" },
//     { id: 8, name: "Broadcast 8" },
//   ];
  
//   // Split the array into chunks of 3 objects
//   const chunkedBroadcasts = chunkArray(broadcastArray, 3);
  
//   console.log(chunkedBroadcasts);
  