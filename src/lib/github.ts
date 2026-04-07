export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=public`
  );
  if (!res.ok) return [];
  return res.json();
}

export interface GitHubStats {
  public_repos: number;
  followers: number;
  public_gists: number;
}

export async function fetchGitHubStats(username: string): Promise<GitHubStats | null> {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) return null;
  return res.json();
}

export const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C++': '#f34b7d',
  C: '#555555',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  Shell: '#89e051',
};
