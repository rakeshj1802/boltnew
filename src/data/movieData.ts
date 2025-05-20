export interface MovieType {
  id: string;
  title: string;
  year: number;
  poster: string;
  rating: number;
  genres: string[];
  language: string;
  quality: string[];
  synopsis: string;
  director: string;
  actors: string[];
  duration: string;
  category: string;
  isTrending?: boolean;
  isNew?: boolean;
}

export const movies: MovieType[] = [
  {
    id: "1",
    title: "The Avengers: Endgame",
    year: 2019,
    poster: "https://images.pexels.com/photos/4089658/pexels-photo-4089658.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 8.4,
    genres: ["Action", "Adventure", "Sci-Fi"],
    language: "English",
    quality: ["720p", "1080p", "4K"],
    synopsis: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    director: "Anthony Russo, Joe Russo",
    actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"],
    duration: "3h 1min",
    category: "hollywood",
    isTrending: true,
    isNew: false
  },
  {
    id: "2",
    title: "Inception",
    year: 2010,
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 8.8,
    genres: ["Action", "Adventure", "Sci-Fi"],
    language: "English",
    quality: ["720p", "1080p"],
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy", "Ken Watanabe"],
    duration: "2h 28min",
    category: "hollywood",
    isTrending: true,
    isNew: false
  },
  {
    id: "3",
    title: "Bahubali: The Beginning",
    year: 2015,
    poster: "https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 8.1,
    genres: ["Action", "Drama"],
    language: "Telugu",
    quality: ["720p", "1080p"],
    synopsis: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring people.",
    director: "S.S. Rajamouli",
    actors: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah Bhatia", "Ramya Krishnan"],
    duration: "2h 38min",
    category: "south-indian",
    isTrending: false,
    isNew: true
  },
  {
    id: "4",
    title: "Geetha Govindam",
    year: 2018,
    poster: "https://images.pexels.com/photos/7234224/pexels-photo-7234224.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 7.7,
    genres: ["Comedy", "Romance"],
    language: "Telugu",
    quality: ["720p", "1080p"],
    synopsis: "An innocent young lecturer is misunderstood as a pervert and despised by a woman who co-incidentally turns out to be the younger sister of his brother-in-law. Eventually differences subside and love blooms between them.",
    director: "Parasuram",
    actors: ["Vijay Deverakonda", "Rashmika Mandanna", "Subbaraju", "Rahul Ramakrishna"],
    duration: "2h 28min",
    category: "south-indian",
    isTrending: false,
    isNew: true
  },
  {
    id: "5",
    title: "3 Idiots",
    year: 2009,
    poster: "https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 8.4,
    genres: ["Comedy", "Drama"],
    language: "Hindi",
    quality: ["720p", "1080p"],
    synopsis: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
    director: "Rajkumar Hirani",
    actors: ["Aamir Khan", "Madhavan", "Mona Singh", "Sharman Joshi", "Kareena Kapoor"],
    duration: "2h 50min",
    category: "bollywood",
    isTrending: true,
    isNew: false
  },
  {
    id: "6",
    title: "Dune",
    year: 2021,
    poster: "https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 8.0,
    genres: ["Action", "Adventure", "Drama"],
    language: "English",
    quality: ["720p", "1080p", "4K"],
    synopsis: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
    director: "Denis Villeneuve",
    actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac", "Josh Brolin", "Stellan Skarsgård"],
    duration: "2h 35min",
    category: "hollywood",
    isTrending: true,
    isNew: true
  },
  {
    id: "7",
    title: "Kabir Singh",
    year: 2019,
    poster: "https://images.pexels.com/photos/2873473/pexels-photo-2873473.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 7.1,
    genres: ["Action", "Drama", "Romance"],
    language: "Hindi",
    quality: ["720p", "1080p"],
    synopsis: "Kabir Singh is a remake of a Telugu movie Arjun Reddy (2017), where a short-tempered house surgeon gets used to drugs and drinks when his girlfriend is forced to marry another person.",
    director: "Sandeep Reddy Vanga",
    actors: ["Shahid Kapoor", "Kiara Advani", "Adil Hussain", "Nikita Dutta", "Soham Majumdar"],
    duration: "2h 53min",
    category: "bollywood",
    isTrending: false,
    isNew: false
  },
  {
    id: "8",
    title: "Money Heist",
    year: 2017,
    poster: "https://images.pexels.com/photos/2372028/pexels-photo-2372028.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 8.3,
    genres: ["Action", "Crime", "Mystery"],
    language: "Spanish",
    quality: ["720p", "1080p"],
    synopsis: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    director: "Álex Pina",
    actors: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño", "Pedro Alonso", "Miguel Herrán"],
    duration: "70min per episode",
    category: "web-series",
    isTrending: true,
    isNew: false
  },
  {
    id: "9",
    title: "Pushpa: The Rise",
    year: 2021,
    poster: "https://images.pexels.com/photos/7809123/pexels-photo-7809123.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 7.6,
    genres: ["Action", "Crime", "Drama"],
    language: "Telugu",
    quality: ["720p", "1080p"],
    synopsis: "A laborer rises through the ranks of a red sandalwood smuggling syndicate, making some powerful enemies in the process.",
    director: "Sukumar",
    actors: ["Allu Arjun", "Fahadh Faasil", "Rashmika Mandanna", "Jagadeesh Prathap Bandari"],
    duration: "2h 59min",
    category: "south-indian",
    isTrending: true,
    isNew: true
  },
  {
    id: "10",
    title: "Parasite",
    year: 2019,
    poster: "https://images.pexels.com/photos/8107226/pexels-photo-8107226.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 8.6,
    genres: ["Comedy", "Drama", "Thriller"],
    language: "Korean",
    quality: ["720p", "1080p"],
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    director: "Bong Joon Ho",
    actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik", "Park So-dam"],
    duration: "2h 12min",
    category: "dubbed",
    isTrending: true,
    isNew: false
  }
];

export const getMovieById = (id: string): MovieType | undefined => {
  return movies.find(movie => movie.id === id);
};

export const getMoviesByCategory = (category: string): MovieType[] => {
  if (category === 'latest') {
    return movies.filter(movie => movie.isNew).sort((a, b) => b.year - a.year);
  }
  
  if (category === 'trending') {
    return movies.filter(movie => movie.isTrending);
  }
  
  return movies.filter(movie => movie.category === category);
};

export const searchMovies = (query: string): MovieType[] => {
  const lowerCaseQuery = query.toLowerCase();
  return movies.filter(movie => 
    movie.title.toLowerCase().includes(lowerCaseQuery) ||
    movie.genres.some(genre => genre.toLowerCase().includes(lowerCaseQuery)) ||
    movie.actors.some(actor => actor.toLowerCase().includes(lowerCaseQuery)) ||
    movie.director.toLowerCase().includes(lowerCaseQuery) ||
    movie.language.toLowerCase().includes(lowerCaseQuery)
  );
};