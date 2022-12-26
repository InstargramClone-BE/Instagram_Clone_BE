const PostRepository = require('../repositories/post.repository');
const UserRepository = require('../repositories/user.repository');
const { Posts, Users } = require('../models');
const { UnknownError } = require('../exceptions/index.exception');
const logger = require('../config/loggers');

class PostService {
  postRepository = new PostRepository(Posts);
  userRepository = new UserRepository(Users);

  createPost = async (userId, content, fileName) => {
    try {
      await this.postRepository.createPost(userId, content, fileName);
    } catch (error) {
      logger.error(error.message);
      throw new UnknownError('게시글 작성에 실패하였습니다');
    }
  };

  findAllPosts = async () => {
    try {
      return await this.postRepository.findAllPosts();
    } catch (error) {
      logger.error(error.message);
      throw new UnknownError('게시글 목록 조회에 실패하였습니다.');
    }
  };

  findProfilePosts = async (userId) => {
    try {
      return await this.postRepository.findProfilePosts(userId);
    } catch (error) {
      logger.error(error.message);
      throw new UnknownError('게시글 목록 조회에 실패하였습니다.');
    }
  };

  findDetailPost = async (postId) => {
    try {
      return await this.postRepository.findDetailPost(postId);
    } catch (error) {
      logger.error(error.message);
      throw new UnknownError('게시글 목록 조회에 실패하였습니다.');
    }
  };

  updatePost = async (postId, content) => {
    try {
      await this.postRepository.updatePost(postId, content);
    } catch (error) {
      logger.error(error.message);
      throw new UnknownError('게시글 수정에 실패하였습니다.');
    }
  };

  deletePost = async (postId) => {
    try {
      await this.postRepository.deletePost(postId);
    } catch (error) {
      logger.error(error.message);
      throw new UnknownError('게시글 삭제에 실패하였습니다.');
    }
  };

  findUser = async (userId) => {
    try {
      return this.userRepository.findUser(userId);
    } catch (error) {
      logger.error(error.message);
      throw new UnknownError('회원정보 조회에 실패하였습니다.');
    }
  };
}

module.exports = PostService;
