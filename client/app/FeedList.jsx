import React from 'react'
import FeedListEntry from './FeedListEntry.jsx'

const FeedList = ({ posts, user }) => {
  return (
    <div>
      <div>
        {posts.sort( (a,b) => {
				a = a.updatedAt;
				b = b.updatedAt;
				return a > b ? -1 : a < b ? 1 : 0;
			}).map((post, key) => <FeedListEntry post={post} key={post.id} user={user} />)}
      </div>
    </div>
  )
}

export default FeedList