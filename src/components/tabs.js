 import axios from 'axios'
 
  const Entrypoint = document.querySelector('.tabs-container')

 const Tabs = ({ uTopics }) => {
  const tabs = document.createElement('div')
  const topic = document.createElement('div')
  const boot = document.createElement('div')
  const tech = document.createElement('div')

  tabs.classList.add('topics')
  topic.classList.add('tab')

  topic.textContent = `${uTopics}`
  boot.textContent = `${uTopics}`
  tech.textContent = `${uTopics}`
  tabs.appendChild(topic)
  tabs.appendChild(boot)
  tabs.appendChild(tech)

  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  return tabs;

}


axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(res => { 
  res.data.topics.forEach(uTopics => {
    const topicComp = Tabs({uTopics})
    Entrypoint.appendChild(topicComp)
  }) 
})
.catch(err => {
  console.log(err)
})
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
 
  const tabsAppender = () => {
  
//Entrypoint.appendChild(Tabs({topics}))
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
