import { useTrending } from 'utils/hooks/useTrending';
import { useLocation } from 'react-router-dom';
import { Container, Wrapper, Image, StyledLink } from './home.styled';

const HomePage = () => {
  const location = useLocation();
  const { trendingMovies } = useTrending();

  return (
    <main>
      <Container>
        {trendingMovies.map(movie => (
          <Wrapper key={movie.id}>
            <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
              <p>{movie.title} </p>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.title}`}
                width="280"
              ></Image>
            </StyledLink>
          </Wrapper>
        ))}
      </Container>
    </main>
  );
};

export default HomePage;
