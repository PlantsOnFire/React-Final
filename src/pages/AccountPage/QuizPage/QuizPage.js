import './QuizPage.scss';
import Banner from '../../../components/Banner/Banner';

function QuizPage () {
  return (
    <main>
      <Banner title='TEST YOUR KNOWLEDGE'/>
      <div className='container p-3' id='quiz-container'>
        <h1>Quizzes Coming Soon!</h1>
        <div>Here at Geo Adventure Kids we are hard at work making content to teach children of the world about geography.</div>
        <div>In the future we plan to add lots of different learning modules to help learn about the countries of the world and more!</div>
        <div>Please stay tuned and we'll have more content in the future! </div>
        <div>Happy Adventuring!</div>
      </div>
    </main>
  )
}

export default QuizPage;