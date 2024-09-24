- [Uçuş Arama Uygulaması (Frontend)](#uçuş-arama-uygulaması-frontend)
  - [Özellikler](#özellikler)
  - [Proje Yapısı](#proje-yapısı)
  - [Gereksinimler](#gereksinimler)
  - [Kurulum](#kurulum)

# Uçuş Arama Uygulaması (Frontend)

Bu proje, kullanıcıların uçuş araması yapabileceği bir React tabanlı frontend uygulamasıdır. Uygulama, kalkış ve varış havalimanlarını seçme ve uçuş tarihini belirleyerek uçuş sonuçlarını listelemektedir.

## Özellikler

- Kalkış ve varış havalimanlarını dropdown menülerinden seçme
- Uçuş tarihi seçimi
- Uçuş sonuçlarını API'den çekip listeleme
- Fiyat, uçuş numarası ve saat gibi detayları gösterme
- Uçuş araması sonucu boş olduğunda kullanıcıya uyarı mesajı gösterme

## Proje Yapısı

Proje React kullanılarak geliştirilmiştir ve Tailwind CSS ile özelleştirilmiştir. Ayrıca PrimeReact bileşenleri kullanılarak dropdown ve takvim gibi kullanıcı arayüz elemanları entegre edilmiştir.

## Gereksinimler

- **Node.js** v16.20.1 veya üzeri
- npm veya yarn

## Kurulum

Projeyi klonladıktan sonra, proje dizininde şu komutları çalıştırarak gerekli bağımlılıkları yükleyin:

```bash
npm install
# veya
yarn install
```
