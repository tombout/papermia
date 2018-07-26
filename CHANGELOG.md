# fr-dashboard CHANGELOG

Thumbs up for [SemVer](http://semver.org/).

## Pre 1.x CHANGELOG

    Major version zero (0.y.z) is for initial development. Anything may change at any time.
    The public API should not be considered stable.

### Version 0.1.0

- Initial NodeJs project setup
- Setup [StandardJs](https://standardjs.com/) to enforce consistent code style
- Use [ExpressJs](https://expressjs.com/) as web framework
- Add some express sample routes using express.Router()
- Evaluate better local require() paths:

  The goal was (and still is) to use the Node require module without relative paths.
  Sadly there seems to be no standard way for this. So I have evaluated several solutions,
  especially from this [Gist](https://gist.github.com/branneman/8048520) but did not take
  to one solution.
  
  I personally would prefer the symlink solution from given gist. But this solution
  does not really work on Windows. The problem here is that when you delete the 
  symlink the wrong way Windows will delete the link target instead of the link. Sadly
  this is the case when you run <code>npm install</code>.
  
  The way I avoid relative paths with the require module is now to give an application
  module its own package.json and add this module as dependency in the main application
  package.json. This way I can require my modules by their name.
