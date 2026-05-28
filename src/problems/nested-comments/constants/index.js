export const commentsData = [
  {
    id: 1,
    text: "This is the first comment",
    author: "Ananya",
    replies: [
      {
        id: 2,
        text: "This is a reply to the first comment",
        author: "Rahul",
        replies: [
          {
            id: 3,
            text: "Nested reply level 2",
            author: "Priya",
            replies: [
              {
                id: 4,
                text: "Nested reply level 3",
                author: "Amit",
                replies: [],
              },
              {
                id: 5,
                text: "Another nested reply level 3",
                author: "Neha",
                replies: [],
              },
            ],
          },
          {
            id: 6,
            text: "Another reply at level 2",
            author: "Karan",
            replies: [],
          },
        ],
      },
      {
        id: 7,
        text: "Second reply to first comment",
        author: "Simran",
        replies: [
          {
            id: 8,
            text: "Reply to second reply",
            author: "Rohit",
            replies: [],
          },
        ],
      },
    ],
  },

  {
    id: 9,
    text: "This is the second top-level comment",
    author: "Vikas",
    replies: [
      {
        id: 10,
        text: "Reply to second top-level comment",
        author: "Sneha",
        replies: [
          {
            id: 11,
            text: "Deep nested reply",
            author: "Arjun",
            replies: [
              {
                id: 12,
                text: "Another deep nested reply",
                author: "Meera",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 13,
    text: "Third top-level comment",
    author: "Dev",
    replies: [],
  },

  {
    id: 14,
    text: "Fourth top-level comment",
    author: "Isha",
    replies: [
      {
        id: 15,
        text: "Reply to fourth comment",
        author: "Manoj",
        replies: [],
      },
      {
        id: 16,
        text: "Another reply to fourth comment",
        author: "Pooja",
        replies: [
          {
            id: 17,
            text: "Nested discussion continues",
            author: "Akash",
            replies: [
              {
                id: 18,
                text: "Level 4 nested reply",
                author: "Nitin",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
