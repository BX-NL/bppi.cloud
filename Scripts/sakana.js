function initSakanaWidget() {
    const kunkun = SakanaWidget.getCharacter('chisato');
    kunkun.image = './Sakana-Widget/images/kunkun.png';
    SakanaWidget.registerCharacter('kunkun', kunkun);
    new SakanaWidget({ character: 'kunkun' }).mount('#sakana-widget');
    // new SakanaWidget().mount('#sakana-widget');
}