import Link from '@/components/Link';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { memo } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

interface MainProps {
  frontMatter: AuthorFrontMatter;
}

function Main(props: MainProps): React.ReactElement {
  const { frontMatter } = props;
  const [aboutColor, contactColor] = useRandomColorPair();

  return (
    <div className='fade-in banner flex flex-1 flex-col justify-center px-6 py-10 dark:text-white lg:px-10'>
      <h1 className='text-3xl font-bold dark:text-white lg:text-5xl'>
        Hey, I am{' '}
        <span className='text-primary-color-500 dark:text-primary-color-dark-500'>
          Manoj
        </span>
      </h1>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
        <div className='col-span-2'>
          <p className='my-4 text-lg lg:text-2xl'>Welcome to my blog!</p>
          <br></br>
          <p className='font-light lg:text-xl'>
            I'm a Full Stack Engineer who is passionate about automating and
            building solution for complex problems through code.
          </p>
        </div>
      </div>

      <p className='my-5 font-light lg:text-xl'>
        Feel free to read more
        <Link className='ml-2 mr-2 font-normal text-black' href='/about'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color='#10b981'
          >
            about me
          </RoughNotation>
        </Link>
      </p>
    </div>
  );
}

export default memo(Main);
