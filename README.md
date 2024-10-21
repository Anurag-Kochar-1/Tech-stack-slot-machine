[](https://github.com/user-attachments/assets/bacf80a1-4ba8-44a6-8d5a-674f79718233)

<!-- // import type { APIRoute } from 'astro';
// import { SYMBOL_GROUPS } from '../../constants/symbol-groups';
// import type { SymbolGroups } from "../../types";

// export const post: APIRoute = async ({ request }) => {
//   const { selectedStack } = await request.json();

//   const selectedTechnologies = Object.entries(selectedStack).flatMap(([category, techId]) => {
//     if (category in SYMBOL_GROUPS) {
//       const group = SYMBOL_GROUPS[category as keyof SymbolGroups];
//       return group.filter(tech => tech.id === techId);
//     }
//     return [];
//   });

//   const html = `
//     <div class="selected-tech-stack">
//       <h2 class="text-2xl font-bold mb-4">Your Selected Tech Stack</h2>
//       <div class="flex flex-wrap gap-4 w-[100%]">
//         ${selectedTechnologies.length > 0 
//           ? selectedTechnologies.map(tech => `
//               <div class="flex items-center bg-gray-800 rounded-lg p-2 text-white">
//                 <img src="${tech.logo}" alt="${tech.name}" class="w-8 h-8 mr-2" />
//                 <span>${tech.name}</span>
//               </div>
//             `).join('')
//           : '<p class="text-gray-400">No technologies selected.</p>'
//         }
//       </div>
//     </div>
//   `;

//   return new Response(html, {
//     status: 200,
//     headers: {
//       "Content-Type": "text/html",
//     },
//   });
// }; -->