// create Comment class here

class Comment {
  constructor (comment, imageID) {
    this.comment = comment
    this.image = Image.all[imageID]
    this.imageID = imageID
    if (!!allComments[imageID]){
      this.id = allComments[imageID].length
      allComments[imageID] = [...allComments[imageID], this]
    } else {
      allComments[imageID] = [this]
    }
  }
  static all () {
    let comments = []
    for (let i = 0; i<Image.all.length; i++) {
      if (allComments[i]){
        allComments[i].forEach((comment) => {
          comments.push(comment)
        })
      }
    }
    // allComments.keys.forEach((comment) => {
    //   [...comments, comment]
    // })
    return comments
  }
  static findImage (id) {
    const comments = allComments.id
    const image = comments[0].image
    comments.forEach((comment) => {
      if (image.comments.includes(comment)){
        return
      }else {
        image.comments.push(comment)
      }
    })
    return image
  }

  commentEL(comment){
    return `<li id="${comment.imageID}${comment.id}">
    ${comment.comment}
    </li>`
  }

}
