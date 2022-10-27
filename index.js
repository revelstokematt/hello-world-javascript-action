const core = require('@actions/core');
const github = require('@actions/github');

try {
  const octokit = github.getOctokit(core.getInput('github-token'))
  //const payload = github.context.payload

  //const reviewers = core.getInput('reviewers').split(',')
  const org = core.getInput('org')
  const team_reviewers = core.getInput('team-reviewers').split(',')
  
  const team_members = []
  team_reviewers.forEach(async team => {
     const members = await octokit.rest.teams.listMembersInOrg({
      org,
      team_slug: team
    })
    team_members.push(members.map(member => member.login))
  })
  console.log(`Team members: ${team_members}`)

  // const result = await octokit.rest.pulls.requestReviewers({
  //   owner: payload.repository.owner.login,
  //   repo: payload.repository.name,
  //   pull_number: payload.pull_request.number,
  //   reviewers,
  //   team_reviewers
  // })
} catch (error) {
  core.setFailed(error)
}