import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos } from './';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items),
    );
  }, [selectedCategory]); // selectedCategory is added in the 'dependecy_array' to call the function everytime we click on a new category
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          © 2023{' '}
          <a
            href="https://www.linkedin.com/in/edwin-bayingana-44a846229/"
            target="blank"
          >
            <span id="copyright-Edwin">
              <i>Edwin Bayingana</i>
            </span>
          </a>
        </Typography>
      </Box>

      <Box
        p={2}
        paddingRight={6}
        sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory}
          <span style={{ color: '#205295' }}> videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
