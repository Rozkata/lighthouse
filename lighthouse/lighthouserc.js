module.exports = {
  ci: {
    collect: {
	  url: ['http://localhost:4200/'],
      startServerCommand: 'npm start'
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