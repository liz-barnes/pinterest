const buildPinCard = (pinObject) => {
  const domString = `<div class="pin-container">
                        <div class="pin-card" id="${pinObject.id}" style="width: 18rem; background-image: url(${pinObject.pinUrl});">
                          <div class="board-btn-container d-flex justify-content-center align-items-end">
                            <button class="btn btn-danger" id="delete-board-btn">Delete Board</button>
                          </div>
                        </div>
                      </div>`;
  return domString;
};

export default { buildPinCard };
