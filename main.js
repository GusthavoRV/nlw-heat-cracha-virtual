const LinksSocialMedia = {
  github: 'GusthavoRV',
  youtube: 'channel/UC3kMgD3MGNxREBPuAfs7w8A',
  facebook: 'gusthavo.rangel',
  instagram: 'gusthavo.rangell',
  twitter: 'SHIRADORY'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfo()
