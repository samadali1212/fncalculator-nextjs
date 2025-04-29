
// Helper functions

// Find a player by slug
export function findPlayerBySlug(slug: string): EPLPlayer | undefined {
  return eplPlayers.find(player => player.slug === slug);
}

// Find a player by ID
export function findPlayerById(id: number): EPLPlayer | undefined {
  return eplPlayers.find(player => player.id === id);
}

// Get all players
export function getAllPlayers(): EPLPlayer[] {
  return eplPlayers;
}

// Format weekly salary
export function formatWeeklySalary(salary: number, currency: string = "£"): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(salary);
}

// Format annual salary
export function formatAnnualSalary(salary: number, currency: string = "£"): string {
  return `${currency}${salary.toLocaleString()}`;
}

// Get similar players based on position and team
export function getSimilarPlayers(player: EPLPlayer, limit: number = 5): EPLPlayer[] {
  // First look for players on the same team
  const sameTeamPlayers = eplPlayers.filter(p => 
    p.id !== player.id && p.team === player.team
  );
  
  // Then look for players in the same position
  const samePositionPlayers = eplPlayers.filter(p => 
    p.id !== player.id && p.position === player.position && p.team !== player.team
  );
  
  // Combine and limit the results
  const combinedPlayers = [...sameTeamPlayers, ...samePositionPlayers];
  
  // Remove duplicates if any
  const uniquePlayers = Array.from(new Set(combinedPlayers.map(p => p.id)))
    .map(id => combinedPlayers.find(p => p.id === id))
    .filter((p): p is EPLPlayer => p !== undefined);
  
  return uniquePlayers.slice(0, limit);
}
