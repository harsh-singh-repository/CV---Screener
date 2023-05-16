//Data is an array of object which contains that contains informtaion about the Candidates
const data = [
    {
        name:"Rohan Das",
        age : 18,
        city : "Kolkata",
        language : 'Python',
        Framework : "Django",
        image : "https://randomuser.me/api/portraits/men/67.jpg"
    },

    {
        name:"Hamraj",
        age : 18,
        city : "Kolkata",
        language : 'Go',
        Framework : "False",
        image : "https://randomuser.me/api/portraits/men/5.jpg"
    },

    {
        name:"Nilesh Thakur",
        age : 18,
        city : "Kolkata",
        language : 'Python',
        Framework : "Django",
        image : "https://randomuser.me/api/portraits/men/27.jpg"
    },

    {
        name:"Simran",
        age : 23,
        city : "Kolkata",
        language : 'JavaScript',
        Framework : "React",
        image : "https://randomuser.me/api/portraits/women/37.jpg"
    },

    {
        name:"Aswariya Rai",
        age : 42,
        city : "Mumbai",
        language : 'Python',
        Framework : "Flask",
        image : "https://randomuser.me/api/portraits/women/97.jpg"
    },
]

// CV Itrator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done:false} :
            {done:true}
        }
    };
}

const candidates = cvIterator(data);
nextCV();

// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">City: ${currentCandidate.city}</li>
    <li class="list-group-item">Language: ${currentCandidate.language}</li>
    <li class="list-group-item">Framework: ${currentCandidate.Framework}</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}