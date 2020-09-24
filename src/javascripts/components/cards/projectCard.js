const buildBoardCard = (boardObject) => {
  const domString = `<div class="project-card" style="width: 18rem; background-image: url(${boardObject.imageUrl});">
                      <div class="card-body">
                      <button></button>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>`;
  return domString;
};

export default { buildBoardCard };
