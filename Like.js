export function LikeL (index){
    const index = likeButton.dataset.index;
    if (comments[index].isliked) {
        comments[index].isliked = false;
        comments[index].like--;
    } else {
        comments[index].like++;
        comments[index].isliked = true;
    };
}