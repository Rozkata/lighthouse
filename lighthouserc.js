module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
	  url: ['http://localhost:4200']
    },
	assert: {
		assertions: {
	    'categories:performance': ['warn', {minScore: 1}],
        'categories:accessibility': ['error', {minScore: 1}]
		}
	},
    upload: {
        target: 'temporary-public-storage'
    },
  },
};