// Intro.js - Gelişmiş diyalog ekranı
import React, { useState } from 'react';
import DialogBox from '../components/DialogBox';
import '../styles/Intro.css';
import characterImage from '../assets/images/bfk-dialog.png';
import partnerImage from '../assets/images/seher-dialog.png';
//import later from '../assets/images/resim9.jpeg';

const dialogs = [
    { character: 'BFK', image: characterImage, text: 'Merhaba 🤩, aramıza hoş geldin! İlk günler biraz zor olabilir ama alışmana yardımcı olmak için buradayım.' },
    { character: 'Bal Surat', image: partnerImage, text: 'Çok teşekkürler! İlk izlenimim çok olumlu, gerçekten samimi bir ekip gibi duruyor.' },
    { character: 'BFK', image: characterImage, text: 'Çok iyi bir ekibe geldin açıkcası! Bu arada, eğer bir şey olursa cidden hiç çekinme, her zaman sorabilirsin.' },
    { character: 'Bal Surat', image: partnerImage, text: 'Çok teşekkür ederim çok naziksin 🥰' },
    { character: 'BFK', image: characterImage, text: '🫠🫠🫠🫠🫠' },
    { text: 'Ekibe alıştıktan sonra' },
    { character: 'Bal Surat', image: partnerImage, text: 'Ameliyat olacağım o yüzden bir kaç gün sizinle olamayacağım' },
    { character: 'BFK', image: characterImage, text: 'Kıza nazar değdirdik iyi mi, maşallah dediğimiz ameliyat oluyor' },
    { text: 'Ameliyattan sonra' },
    { character: 'BFK', image: characterImage, text: 'Ameliyatının iyi geçtiğini duydum, umarım çabucak iyileşirsin. Sana ufak bir sürpriz hazırladım, belki moralin biraz yerine gelir.' },
    { character: 'Bal Surat', image: partnerImage, text: 'Çiçekler ve dondurma mı?💐🍦 Sen gerçekten harikasın! Bu jest beni çok mutlu etti, nasıl teşekkür etsem az.🥰' },
    { character: 'BFK', image: characterImage, text: 'Rica ederim, önemli olan senin iyiliğin. Dondurmayı sevdiğini tahmin etmiştim' },
    { text: 'İlişkiden sonra' },
    { character: 'Bal Surat', image: partnerImage, text: 'Resim sergisine gidelim mi?' },
    { character: 'BFK', image: characterImage, text: 'Bayılırım. Seninle geçirdiğim her an gerçekten benzersiz' },
    { character: 'Bal Surat', image: partnerImage, text: 'Kabul etmezsin sanmıştım. Bu beni çok sevindirdi.' },
    { character: 'BFK', image: characterImage, text: 'Tiyatro, müze, resim her şey bizden sorulur. Sadece modern sanat işinde yokum 😂 (iç ses: Gördüğüm en güzel sanat eseri sensin ❤️)' },
    { character: 'Bal Surat', image: partnerImage, text: 'O zaman bi Italyamız yok mu?' },
    { character: 'BFK', image: characterImage, text: 'Var var ama burnundan getiririm. Sadece venedike bayılırım, bir de yemeklerine özellikle pistachiolu şeyler hahahhah' },
    { text: 'Onsuz olamayacağımı anladığım andan sonra' },
    { character: 'BFK', image: characterImage, text: 'Hayatıma girdiğin günden beri her anı daha renkli, her anı daha anlamlı hale getirdin.' },
    { character: 'BFK', image: characterImage, text: 'Senin güzelliğin, kalbinin temizliği ve bana kattığın onca güzel şey için sonsuz teşekkür ederim' },
    { character: 'BFK', image: characterImage, text: 'Birlikte geçirdiğimiz her an, beni daha iyi bir insan yaptın.Seninle birlikte büyüdüm, geliştim ve hayatı den güzel haliyle deneyimledim.' },
    { character: 'BFK', image: characterImage, text: 'Naçizane bir şey göstermek istiyorum, umarım beğenirsin. Hazır mısın?' },
    { character: 'Bal Surat', image: partnerImage, text: 'Aaa neymiş hadi çabuk göster bakalım 😇' },



];

const Intro = ({ onStart }) => {
    const [currentDialog, setCurrentDialog] = useState(0);

    const handleNextDialog = () => {
        if (currentDialog < dialogs.length - 1) {
            setCurrentDialog(currentDialog + 1);
        } else {
            onStart();
        }
    };

    const handlePreviousDialog = () => {
        if (currentDialog > 0) {
            setCurrentDialog(currentDialog - 1);
        }
    };

    return (
        <div className="intro-container">
            <div className="dialog-container">
                <img
                    src={dialogs[currentDialog].image}
                    alt={dialogs[currentDialog].character}
                    className="character-image"
                />
                <DialogBox dialog={dialogs[currentDialog]} />
            </div>
            <div className="navigation-buttons">
                <button onClick={handlePreviousDialog} disabled={currentDialog === 0}>
                    Geri
                </button>
                <button onClick={handleNextDialog}>
                    {currentDialog === dialogs.length - 1 ? "Oyuna Başla" : "İleri"}
                </button>
            </div>
        </div>
    );
};

export default Intro;
