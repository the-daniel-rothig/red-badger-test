# Red Badger Test

An API to evaluate robot movement on a grid, along with a React.UI to play with it.

```shell
cd api
npm run build
npm start &
cd ../ui
npm start &
```

Navigate to `http://localhost:3000/` to start.

## Note on task completion

Most of my time was spent on implementing the robot movement logic. I wanted to show off good coding style here so used a TDD approach on immutable objects.

I created the API and UI projects with `express-generator-typescript` and `create-react-app --typescript` respectively, stripping out most unused components (though some may remain).

I also wanted to show off idiomatic use of react-redux and redux-thunk, which is why I went for a UI/API devide.

## Next steps / left-over work

I skipped unit tests for the UI and for the API endpoint itself, because I expected this wouldn't be particularly interesting from an assessment point of view. In the field, I would write tests (in order of priority) for the action generators, reducers, and and the HOCs generated with `connect()`. For the latter, I would use enzyme for structural tests. I would also write an integration test for the API, spinning up an instance of it and calling the `/grid` endpoint over HTTP.

I have designed in some resilience in the parser but would want to exend this. Particularly, I would add more detailed feedback for parsing errors. In this example I handle parsing errors by throwing internal server errors; in the field, I would wrap such errors into the response body.

I would like to handle race conditions with subsequent `fetch` requests better, discarding in-flight fetches when a new one is triggered.

I noted that my Grid implementation only allows for sequential robot evaluations - you can't have multiple robots on the same grid. Upon review, I would pass in a Grid object into the moveForward method to allow an arbitrary sequence of robot evaluations, but for this exercise that seemed like overkill.
