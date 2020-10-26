import Risk from '@/domain/Risk'
import Likeliness from '@/domain/Likeliness'
import Consequences from '@/domain/Consequences'

describe('Risk.getLevel', () => {
  it('should return lowest level if consequence is the lowest', () => {
    expect(Risk.getLevel(Likeliness.notLikely, Consequences.lowest)).toStrictEqual(Risk.levels.lowest)
    expect(Risk.getLevel(Likeliness.notVeryLikely, Consequences.lowest)).toStrictEqual(Risk.levels.lowest)
    expect(Risk.getLevel(Likeliness.likely, Consequences.lowest)).toStrictEqual(Risk.levels.lowest)
    expect(Risk.getLevel(Likeliness.highlyLikely, Consequences.lowest)).toStrictEqual(Risk.levels.lowest)
    expect(Risk.getLevel(Likeliness.nearCertainty, Consequences.lowest)).toStrictEqual(Risk.levels.lowest)
  })
  it('should return lowest level if consequence is low and event not likely', () => {
    expect(Risk.getLevel(Likeliness.notLikely, Consequences.low)).toStrictEqual(Risk.levels.lowest)
  })
  it('should return low level if consequence is low and event not very likely', () => {
    expect(Risk.getLevel(Likeliness.notVeryLikely, Consequences.low)).toStrictEqual(Risk.levels.low)
  })
  it('should return low level if consequence is low and event likely', () => {
    expect(Risk.getLevel(Likeliness.likely, Consequences.low)).toStrictEqual(Risk.levels.low)
  })
  it('should return medium level if consequence is low and event highly likely', () => {
    expect(Risk.getLevel(Likeliness.highlyLikely, Consequences.low)).toStrictEqual(Risk.levels.medium)
  })
  it('should return high level if consequence is low and event near certainty', () => {
    expect(Risk.getLevel(Likeliness.nearCertainty, Consequences.low)).toStrictEqual(Risk.levels.high)
  })

  it('should return low level if consequence is medium and event not likely', () => {
    expect(Risk.getLevel(Likeliness.notLikely, Consequences.medium)).toStrictEqual(Risk.levels.low)
  })
  it('should return medium level if consequence is medium and event not very likely', () => {
    expect(Risk.getLevel(Likeliness.notVeryLikely, Consequences.medium)).toStrictEqual(Risk.levels.medium)
  })
  it('should return medium level if consequence is medium and event likely', () => {
    expect(Risk.getLevel(Likeliness.likely, Consequences.medium)).toStrictEqual(Risk.levels.medium)
  })
  it('should return high level if consequence is medium and event highly likely', () => {
    expect(Risk.getLevel(Likeliness.highlyLikely, Consequences.medium)).toStrictEqual(Risk.levels.high)
  })
  it('should return highest level if consequence is medium and event near certainty', () => {
    expect(Risk.getLevel(Likeliness.nearCertainty, Consequences.medium)).toStrictEqual(Risk.levels.highest)
  })

  it('should return low level if consequence is high and event not likely', () => {
    expect(Risk.getLevel(Likeliness.notLikely, Consequences.high)).toStrictEqual(Risk.levels.low)
  })
  it('should return medium level if consequence is high and event not very likely', () => {
    expect(Risk.getLevel(Likeliness.notVeryLikely, Consequences.high)).toStrictEqual(Risk.levels.medium)
  })
  it('should return high level if consequence is high and event likely', () => {
    expect(Risk.getLevel(Likeliness.likely, Consequences.high)).toStrictEqual(Risk.levels.high)
  })
  it('should return highest level if consequence is high and event highly likely', () => {
    expect(Risk.getLevel(Likeliness.highlyLikely, Consequences.high)).toStrictEqual(Risk.levels.highest)
  })
  it('should return highest level if consequence is high and event near certainty', () => {
    expect(Risk.getLevel(Likeliness.nearCertainty, Consequences.high)).toStrictEqual(Risk.levels.highest)
  })

  it('should return medium level if consequence is highest and event not likely', () => {
    expect(Risk.getLevel(Likeliness.notLikely, Consequences.highest)).toStrictEqual(Risk.levels.medium)
  })
  it('should return high level if consequence is highest and event not very likely', () => {
    expect(Risk.getLevel(Likeliness.notVeryLikely, Consequences.highest)).toStrictEqual(Risk.levels.high)
  })
  it('should return highest level if consequence is highest and event likely', () => {
    expect(Risk.getLevel(Likeliness.likely, Consequences.highest)).toStrictEqual(Risk.levels.highest)
  })
  it('should return highest level if consequence is highest and event highly likely', () => {
    expect(Risk.getLevel(Likeliness.highlyLikely, Consequences.highest)).toStrictEqual(Risk.levels.highest)
  })
  it('should return highest level if consequence is highest and event near certainty', () => {
    expect(Risk.getLevel(Likeliness.nearCertainty, Consequences.highest)).toStrictEqual(Risk.levels.highest)
  })
});