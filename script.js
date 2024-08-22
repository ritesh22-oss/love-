function chooseOption(sceneNumber, choice) {
    // Define correct choices for each scene
    const correctChoices = {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20'
    };

    // Check if the choice is correct for the current scene
    if (correctChoices[sceneNumber] === choice) {
        // Move to the next scene based on the current scene number
        let nextSceneNumber = sceneNumber + 1;
        if (sceneNumber === 20) {
            if (choice === 'yes') {
                alert('It’s possible to stay friends, but it depends on the individuals.');
            } else {
                alert('Sometimes, it’s difficult to stay friends after a breakup.');
            }
            restartStory(); // Restart after the final scene
        } else if (document.getElementById('scene-' + nextSceneNumber)) {
            goToScene(nextSceneNumber);
        } else {
            alert('End of the story.');
        }
    } else {
        // Wrong choice
        alert('Sorry, I am not a better one for you.');
        restartStory(); // Restart the story
    }
}

function goToScene(sceneNumber) {
    const currentScene = document.querySelector('.scene.active');
    const nextScene = document.getElementById('scene-' + sceneNumber);
    if (currentScene) {
        currentScene.classList.remove('active');
    }
    if (nextScene) {
        nextScene.classList.add('active');
    }
}

function restartStory() {
    document.querySelector('.scene.active').classList.remove('active');
    document.getElementById('scene-1').classList.add('active');
}
