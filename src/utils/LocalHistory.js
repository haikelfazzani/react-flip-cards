const LocalHistoryName = 'history-requests';

export default class LocalHistory {

  static add (request) {
    let hstory = this.getAll();
    hstory.unshift(request);
    localStorage.setItem(LocalHistoryName, JSON.stringify(hstory));
  }

  static remove (request) {
    let hstory = this.getAll();
    hstory = hstory.filter(h => h.date !== request.date);
    localStorage.setItem(LocalHistoryName, JSON.stringify(hstory));
  }

  static getAll () {
    let hstory = localStorage.getItem(LocalHistoryName);
    return hstory ? JSON.parse(hstory) : [];
  }

}