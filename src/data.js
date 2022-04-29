const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1650999934328-eaef7ddf2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1650769392099-83dd1dc6f5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1650532596364-37b8a537f3f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1650658765456-8c0e3d515b2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: true,
  },

  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1650617711972-d2be5861407a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: true,
  },

  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1650900904177-c4ccf90c96cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1651151047323-949128de556b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1650991274385-273c29c2de86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1650747835887-3abb06160fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1650749837474-a9ab19e3d1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1650718821025-38e7679ac34a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1650906495627-3295a04fdf89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1650678227203-1234a2e6d8f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1649659904428-98f469d28d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 15,
    url: 'https://images.unsplash.com/photo-1650575185249-2b6a65f92d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: true,
  },

  {
    id: 16,
    url: 'https://images.unsplash.com/photo-1635791552443-4653df1aed2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 17,
    url: 'https://images.unsplash.com/photo-1650830248740-7d1e07ca2b76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: true,
  },

  {
    id: 18,
    url: 'https://images.unsplash.com/photo-1648881974371-e481ca83dc57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 19,
    url: 'https://images.unsplash.com/photo-1648802330761-35535d27b5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },

  {
    id: 20,
    url: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    isFav: false,
  },
];

export default images;
